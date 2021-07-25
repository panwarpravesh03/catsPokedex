
export default function reducer(state = [], action)
{
	switch(action.type)
	{
		case "ADD_CAT":
			return [
				...state,
				{
					//description: action.payload.description,
				//	data: state.data.concat([action.book])
				}
			];
			
		case "DELETE_CAT":
			return [
				...state.filter( cat => cat.id != action.payload.id)				
			]
			
	}
}