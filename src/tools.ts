import bcrypt from 'bcrypt';

export const passwordMatchesHash = async (password: string, hash: string) => {
	return await bcrypt.compare(password, hash);
}