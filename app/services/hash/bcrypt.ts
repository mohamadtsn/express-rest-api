import bcrypt from 'bcrypt'

export const hash = (data: any) => {
	return bcrypt.hashSync(data, 11)
}

export const verify = (data: any, hash: any) => {
	return bcrypt.compareSync(data, hash)
}
