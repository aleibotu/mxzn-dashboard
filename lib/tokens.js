import {v4 as uuidv4} from 'uuid'

export const generateVerificationToken = async (email) => {
    const token = uuidv4()
    const expires = new Date(new Date().getTime() + 3600 * 1000)

    // const existingToken = await
}
