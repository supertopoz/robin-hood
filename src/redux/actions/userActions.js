import React from 'react';

module.exports.changeUser = (data) => {

	return {
		type: "SET_LOADING_BAR",
		value: data
	}
}