export const createPreviewSession = (email: string) => {
  const token = Math.random().toString(36).slice(2);

  localStorage.setItem('preview_email', email);
  localStorage.setItem('preview_token', token);

  return token;
};

export const isPreviewAdmin = (role: string) => role == 'admin';

export const renderPreviewMessage = (message: string) => {
  document.body.innerHTML = message;
};
