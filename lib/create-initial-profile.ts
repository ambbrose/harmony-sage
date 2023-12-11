import { currentUser, redirectToSignIn } from "@clerk/nextjs";

import { db } from "@/lib/db";

export const createInitialProfile = async () => {
    const user = await currentUser();

    if (!user) {
        return redirectToSignIn();
    };

    const newProfile = await db.profile.create({
        data: {
            userId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            imgUrl: user.imageUrl,
            email: user.emailAddresses[0].emailAddress
        }
    });

    return newProfile;
}