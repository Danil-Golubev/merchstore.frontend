import axios from '../axios';
export const fetchGetOne = async (id) => {
	const { data } = await axios.get(`/item/${id}`);
	return data;
};
