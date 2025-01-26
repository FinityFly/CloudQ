import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth0 } from '@auth0/auth0-react';

const ProfileCard = () => {
  const { user, isAuthenticated } = useAuth0();

  // If the user is not authenticated or user data is missing, return null
  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <Card className="w-80 p-4">
      <CardContent className="flex flex-col items-center gap-4">
        {/* Avatar */}
        <Avatar className="w-16 h-16">
          <AvatarImage src={user.picture || "https://via.placeholder.com/150"} alt={user.name || "User"} />
          <AvatarFallback>{user.name ? user.name[0].toUpperCase() : "U"}</AvatarFallback>
        </Avatar>

        {/* Name & Email */}
        <div className="w-full text-center">
          <p className="text-lg font-semibold">Organizer Name: {user.name || "Anonymous"}</p>
          <p className="text-sm text-gray-500">Email: {user.email || "No email provided"}</p>
          <p className="text-sm text-gray-500">Last Updated: {user.updated_at ? new Date(user.updated_at).toLocaleString() : "Unknown"}</p>
          <p className="text-sm text-gray-500">Managing: 3 Active Events</p>

        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
