export const validateNickname = (nickname: string) => {
  return new Promise<boolean>((resolve) => {
    if (!nickname.length) return resolve(true);
    setTimeout(() => {
      nickname.at(-1) === "t" ? resolve(true) : resolve(false);
    }, 1000);
  });
};
