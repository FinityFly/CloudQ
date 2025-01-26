#[starknet::interface]
trait ICloudQ<TContractState> {
    fn viewQueue(self: @TContractState) -> Array<felt252>;
    fn getFrontOfQueue(self: @TContractState) -> starknet::ContractAddress;
    fn getPosition(self: @TContractState, person_id: u32) -> u32;
    fn getLength(self: @TContractState) -> u32;
    fn addPerson(ref self: TContractState, contract_address: starknet::ContractAddress, name: felt252, phone_number: u32, time_joined: u32);
    fn removePerson(ref self: TContractState, person_id: u32);
}

#[derive(Drop, Serde, starknet::Store)]
struct PersonInfo {
    person_id: u32,
    contract_address: starknet::ContractAddress,
    name: felt252,
    phone_number: u32,
    time_joined: u32,
}

#[starknet::contract]
mod CloudQ {
    use starknet::storage::{
        StoragePointerReadAccess, StoragePointerWriteAccess,
        Vec, VecTrait, MutableVecTrait, Map, StoragePathEntry,
    };
    use core::starknet::{ContractAddress};
    use core::array::ArrayTrait;
    use super::PersonInfo;

    #[storage]
    struct Storage {
        queue: Map<u32, PersonInfo>,
        queue_size: u32,
    }

    #[constructor]
    fn constructor(ref self: ContractState) {
        self.queue_size.write(0);
    }

    #[abi(embed_v0)]
    impl CloudQImpl of super::ICloudQ<ContractState> {
        fn viewQueue(self: @ContractState) -> Array<felt252> {
            let mut queueExport = ArrayTrait::new();
            let queue_size = self.queue_size.read();

            let mut i: u32 = 0;
            loop {
                if i >= queue_size {
                    break;
                }

                let person_info = self.queue.entry(i).read();
                queueExport.append(person_info.person_id.into());
                queueExport.append(person_info.contract_address.into());
                queueExport.append(person_info.name.into()); // might not need into
                queueExport.append(person_info.phone_number.into());
                queueExport.append(person_info.time_joined.into());
                i += 1;
            };
            
            queueExport
        }

        fn getFrontOfQueue(self: @ContractState) -> ContractAddress {
            let queue = self.queue.entry(0).read();
            assert(self.queue_size.read() > 0, 0);
            queue.contract_address
        }

        fn getPosition(self: @ContractState, person_id: u32) -> u32 {
            let queue_size = self.queue_size.read();
            assert(person_id <= queue_size, 0);

            let person = self.queue.entry(person_id).read();
            person.person_id
        }

        fn getLength(self: @ContractState) -> u32 {
            self.queue_size.read()
        }

        fn addPerson(ref self: ContractState, contract_address: ContractAddress, name: felt252, phone_number: u32, time_joined: u32) {
            let person_id = self.queue_size.read() + 1;
            let person = PersonInfo {
                person_id,
                contract_address,
                name,
                phone_number,
                time_joined,
            };

            self.queue.entry(person_id).write(person);
            self.queue_size.write(person_id);
        }

        fn removePerson(ref self: ContractState, person_id: u32) {
            let queue_size = self.queue_size.read();
            assert(person_id <= queue_size, 0);

            if person_id != queue_size {
                let mut last_person = self.queue.entry(queue_size).read();
                last_person.person_id = person_id;
                self.queue.entry(person_id).write(last_person);
            }

            self.queue_size.write(queue_size - 1);
        }
    }
}
