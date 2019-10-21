
export const getAll = () => (
	async (dispatch) => {
		const users = await fetch("https://jsonplaceholder.typicode.com/users")
		const response = await users.json()
		dispatch({ type: "get_users", payload: response })
	}
)
