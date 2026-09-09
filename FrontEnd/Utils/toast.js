export const showToast = (message, type = "success") => {
  const toast = document.createElement("div");

  const icon = type === "success" ? "✓" : "!";

  toast.innerHTML = ` <div class="flex items-center gap-3"> <div class=" w-8 h-8 rounded-full flex items-center justify-center ${   type === "success"     ? "bg-purple-500/20 text-purple-600"     : "bg-red-500/20 text-red-500" } font-bold "> ${icon} </div> <span>${message}</span> </div> `;

  toast.className = ` fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] min-w-[300px] px-5 py-4 rounded-2xl bg-white/30 backdrop-blur-xl border border-white/40 shadow-2xl text-gray-900 font-medium animate-[slideUp_0.4s_ease-out] `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-3");

    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
};
