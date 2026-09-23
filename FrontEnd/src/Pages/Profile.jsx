import React, { useEffect, useState } from "react";
import { Camera, Lock, Mail, Phone, Trash2, User, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../Slices/authSlice";

export default function Profile() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth?.user);
  const token = useSelector((state) => state.auth?.token);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const [preview, setPreview] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;
  const SERVER_URL = API_URL.replace("/api", "");

  useEffect(() => {
    if (!user) return;

    setFormData({
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      phoneNumber: user.phoneNumber || "",
      email: user.email || "",
    });

    if (user.profileImage) {
      setPreview(`${SERVER_URL}/upload/${user.profileImage}`);
    } else {
      setPreview("");
    }
  }, [user, SERVER_URL]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/user`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      console.log("Update profile result:", result);

      if (!response.ok) {
        console.log(result.message || "Failed to update profile");
        return;
      }

      dispatch(setUser(result.data));

      console.log("Profile updated successfully");
    } catch (error) {
      console.log("Update profile error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUploadImage = async () => {
    if (!selectedImage) return;

    try {
      setImageLoading(true);

      const data = new FormData();

      data.append("profileImage", selectedImage);

      const response = await fetch(`${API_URL}/user/profile/image`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });

      const result = await response.json();

      console.log("Upload image:", result);

      if (!response.ok) {
        console.log(result.message || "Image upload failed");
        return;
      }

      dispatch(setUser(result.data));

      setSelectedImage(null);

      console.log("Profile image updated successfully");
    } catch (error) {
      console.log("Upload image error:", error);
    } finally {
      setImageLoading(false);
    }
  };

  const handleDeleteImage = async () => {
    try {
      const response = await fetch(`${API_URL}/user/profile/image`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      console.log("Delete image:", result);

      if (!response.ok) {
        console.log(result.message || "Failed to delete image");
        return;
      }

      dispatch(
        setUser({
          ...user,
          profileImage: null,
        })
      );

      setPreview("");
      setSelectedImage(null);
    } catch (error) {
      console.log("Delete image error:", error);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (
      !passwordData.currentPassword ||
      !passwordData.newPassword ||
      !passwordData.confirmPassword
    ) {
      console.log("Please fill all password fields");
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/user/password`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword,
        }),
      });

      const result = await response.json();

      console.log("Change password:", result);

      if (!response.ok) {
        console.log(result.message || "Password change failed");
        return;
      }

      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      console.log("Password changed successfully");
    } catch (error) {
      console.log("Change password error:", error);
    }
  };

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to permanently delete your account?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(`${API_URL}/user/account`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      console.log("Delete account:", result);

      if (!response.ok) {
        console.log(result.message || "Failed to delete account");
        return;
      }

      console.log("Account deleted");
    } catch (error) {
      console.log("Delete account error:", error);
    }
  };

  return (
    <div className="mx-5 h-[calc(100vh-80px)] overflow-hidden">
      <div className="flex flex-col py-4">
        <h1 className="font-bold text-2xl">Profile</h1>

        <p className="font-semibold text-slate-500 text-[14px]">
          Manage your personal information and account.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-[5px] shadow-sm px-5 py-3 mb-3">
        <div className="flex items-center gap-4">
          <div className="relative shrink-0">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center border-4 border-white shadow-sm">
              {preview ? (
                <img
                  src={preview}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.log("PROFILE IMAGE ERROR:", preview);
                    e.currentTarget.style.display = "none";
                  }}
                />
              ) : (
                <User size={34} className="text-blue-900" />
              )}
            </div>

            <label
              htmlFor="profileImage"
              className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-blue-900 text-white flex items-center justify-center cursor-pointer hover:bg-blue-950 transition"
            >
              <Camera size={14} />

              <input
                id="profileImage"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-800">
              {formData.firstName} {formData.lastName}
            </h2>

            <p className="text-xs text-slate-500 mt-0.5">
              {formData.email}
            </p>

            {selectedImage && (
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={handleUploadImage}
                  disabled={imageLoading}
                  className="px-3 py-1.5 bg-blue-900 text-white text-xs font-semibold rounded-lg hover:bg-blue-950 transition"
                >
                  {imageLoading ? "Uploading..." : "Save photo"}
                </button>

                <button
                  onClick={() => {
                    setSelectedImage(null);

                    if (user?.profileImage) {
                      setPreview(
                        `${SERVER_URL}/upload/${user.profileImage}`
                      );
                    } else {
                      setPreview("");
                    }
                  }}
                  className="p-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200"
                >
                  <X size={14} />
                </button>
              </div>
            )}

            {user?.profileImage && !selectedImage && (
              <button
                onClick={handleDeleteImage}
                className="mt-1.5 text-xs font-semibold text-red-500 hover:text-red-600"
              >
                Remove profile photo
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="lg:col-span-2">
          <div className="bg-white border border-slate-200 rounded-[5px] shadow-sm p-4 h-full">
            <div className="mb-3">
              <h3 className="font-bold text-slate-800">
                Personal Information
              </h3>

              <p className="text-xs text-slate-500 mt-0.5">
                Update your personal details
              </p>
            </div>

            <form onSubmit={handleUpdateProfile}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    First Name
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-lg border border-slate-200 bg-white outline-none focus:border-blue-900 transition text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Last Name
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-lg border border-slate-200 bg-white outline-none focus:border-blue-900 transition text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Phone Number
                  </label>

                  <div className="relative">
                    <Phone
                      size={15}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full h-10 pl-9 pr-3 rounded-lg border border-slate-200 bg-white outline-none focus:border-blue-900 transition text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Email
                  </label>

                  <div className="relative">
                    <Mail
                      size={15}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full h-10 pl-9 pr-3 rounded-lg border border-slate-200 bg-white outline-none focus:border-blue-900 transition text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 rounded-lg bg-blue-900 text-white text-xs font-semibold hover:bg-blue-950 transition disabled:opacity-50"
                >
                  {loading ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div>
          <div className="bg-white border border-slate-200 rounded-[5px] shadow-sm p-4 h-full">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <Lock size={16} className="text-blue-900" />
              </div>

              <div>
                <h3 className="font-bold text-slate-800">
                  Security
                </h3>

                <p className="text-xs text-slate-500">
                  Manage your password
                </p>
              </div>
            </div>

            <form onSubmit={handleChangePassword}>
              <div className="mb-2.5">
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Current Password
                </label>

                <input
                  type="password"
                  name="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  className="w-full h-9 px-3 rounded-lg border border-slate-200 bg-white outline-none focus:border-blue-900 text-sm"
                />
              </div>

              <div className="mb-2.5">
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  New Password
                </label>

                <input
                  type="password"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  className="w-full h-9 px-3 rounded-lg border border-slate-200 bg-white outline-none focus:border-blue-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Confirm Password
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  className="w-full h-9 px-3 rounded-lg border border-slate-200 bg-white outline-none focus:border-blue-900 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-3 py-2 rounded-lg bg-blue-900 text-white text-xs font-semibold hover:bg-blue-950 transition"
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>

<div className="mt-2 bg-white border border-red-100 rounded-[5px] shadow-sm px-4 py-2">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div className="w-7 h-7 rounded-md bg-red-50 flex items-center justify-center">
        <Trash2 size={14} className="text-red-500" />
      </div>

      <div>
        <h3 className="font-bold text-xs text-slate-800">
          Delete Account
        </h3>

        <p className="text-[10px] text-slate-500">
          Permanently delete your CarCare account
        </p>
      </div>
    </div>

    <button
      onClick={handleDeleteAccount}
      className="px-3 py-1.5 rounded-lg border border-red-200 text-red-600 text-[11px] font-semibold hover:bg-red-50 transition shrink-0"
    >
      Delete Account
    </button>
  </div>
</div>
    </div>
  );
}