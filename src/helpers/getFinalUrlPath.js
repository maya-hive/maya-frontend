export const getFinalUrlPath = thePath => {
	return thePath.substring(thePath.lastIndexOf('/') + 1);
};
