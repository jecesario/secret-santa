const currentPassword = Intl.DateTimeFormat('pt-br').format(new Date()).split('/').join('');
export const validatePassword = (password: string): boolean => {
    return password === currentPassword;
}

export const createToken = (): string => {
    return `${process.env.DEFAULT_TOKEN}${currentPassword}`;
}

export const validateToken = (token: string): boolean => {
    const currentToken = createToken();
    return token === currentToken;
}