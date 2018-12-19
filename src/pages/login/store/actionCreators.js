import axios from 'axios';
const changeLogin = (bool)=> ({
	type: 'CHANG_LOGIN',
	isLogin: bool,
});

export const loginOnClick = (name, password) => {
	return dispatch => {
		axios
			.get('api/login.json?name=' + name + '&password=' + password)
			.then(res => {
        if(res.data.data && res.data.success)
        {
          dispatch(changeLogin(res.data.data));
        }else{
          alert('登录失败')
        }
			})
			.catch(err => {
				console.log(err);
			});
	};
};

export const logout =()=>{
	return dispatch =>{
		dispatch(changeLogin(false));
	}
}
