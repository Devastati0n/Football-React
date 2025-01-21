
import UpdateProfileForm from "@/app/ui/profile-settings/update-profile-form";
import UpdatePasswordForm from "@/app/ui/profile-settings/update-password-form";
import UpdateEmailForm from "@/app/ui/profile-settings/update-email-form";

export default function Profile() {
  return (
    <main>
      <div className="flex w-full items-center justify-between mb-4">
        <h1>Profile Settings</h1>
      </div>
      <div className="">
        <UpdateProfileForm />
        <UpdatePasswordForm />
        <UpdateEmailForm />
      </div>
    </main>
  );
}
