import axios from 'axios';
const rootAPI = import.meta.env.VITE_APP_ROOTAPI;
const userEp = rootAPI + '/users';
const listEp = rootAPI + '/bucket-lists';



/******************* Methods for User *******************************/
export const postNewUser = async (userObj) => {
    try {
        const { data } = await axios.post(userEp, userObj);
        return data;
    } catch (error) {
        console.log(error)
        return {
            status: 'error',
            message: error.message,
        }
    }
}

export const loginUser = async (userObj) => {
    try {
        const { data } = await axios.post(userEp + '/login', userObj);
        return data;
    } catch (error) {
        console.log(error)
        return {
            status: 'error',
            message: error.message,
        }
    }
}


/******************* Methods for Bucket List *******************************/
export const getBucketLists = async (owner) => {
    try {
        const { data } = await axios.get(listEp, owner);
        return data;
    } catch (error) {
        console.log(error)
        return {
            status: 'error',
            message: error.message,
        }
    }
}

export const getBucketList = async (owner, id) => {
    try {
        const { data } = await axios.get(listEp + '/list', {
            headers: {
                Authorization: owner,
                _id: id
            }
        });
        return data;
    } catch (error) {
        console.log(error)
        return {
            status: 'error',
            message: error.message,
        }
    }
}

export const postBucketItem = async (listItem) => {
    try {
        const { data } = await axios.post(listEp, listItem);
        return data;
    } catch (error) {
        console.log(error)
        return {
            status: 'error',
            message: error.message,
        }
    }
}

export const deleteBucketItem = async (idsToDelete) => {
    try {
        const { data } = await axios.delete(listEp, {
            data: idsToDelete,
            // headers: {
            //     Authorization: userId,
            // },
        });
        return data;
    } catch (error) {
        console.log(error);
        return {
            status: "error",
            message: error.message,
        };
    }
}