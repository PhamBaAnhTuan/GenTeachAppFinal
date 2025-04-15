const initialState:any = {
   isAuthenticated: undefined,
   user: null,
   accessToken: null,
   video: [],
   category: [],
   products: [],
   expert: [],
   topic: [],
   course: [],
   podcast: [],
   cart: [],
}
const Reducer = (state = initialState, action: any) => {

   switch (action.type) {
      case 'SIGN_IN':
         return {
            ...state,
            isAuthenticated: true,
            user: action.payload.user_data,
            accessToken: action.payload.access_token,
         }

      case 'SIGN_UP':
         return {
            ...state,
         }
      case 'SIGN_OUT':
         return {
            ...state,
            isAuthenticated: false,
            user: null,
            accessToken: null,
         }
      case 'GET_USER_PROFILE':
         return {
            ...state,
            user: { ...state.user, ...action.payload },
         }
      case 'UPDATE_USER_INFO':
         return {
            ...state,
            user: { ...state.user, ...action.payload }
         }
      case 'UPDATE_PROFILE':
         return {
            ...state,
            user: { ...state.user, ...action.payload }
         }


      case 'GET_VIDEO':
         return {
            ...state,
            video: action.payload,
         }
      case 'GET_CATEGORY':
         return {
            ...state,
            category: action.payload,
         }
      case 'GET_PRODUCT':
         return {
            ...state,
            products: action.payload,
         }
      case 'GET_EXPERT':
         return {
            ...state,
            expert: action.payload,
         }
      case 'GET_TOPIC':
         return {
            ...state,
            topic: action.payload,
         }
      case 'GET_COURSE':
         return {
            ...state,
            course: action.payload,
         }
      case 'GET_PODCAST':
         return {
            ...state,
            podcast: action.payload,
         }
      case 'GET_CART':
         return {
            ...state,
            cart: action.payload,
         }
         
      // video
      case 'POST_VIDEO':
         return {
            ...state,
            video: [...state.video, action.payload]
         }
      case 'UPDATE_VIDEO':
         return {
            ...state,
            video: state.video.map((vid:any) =>
               vid.id === action.payload.id ? action.payload : vid
            ),
         }
      case 'DELETE_VIDEO':
         return {
            ...state,
            video: state.video.filter((vid:any) => vid.id !== action.payload)
         }

      case 'UPDATE_USER':
         return {
            ...state,
            user: action.payload
         }

      case 'ADD_TO_CART':
         const cart = state.cart || [];
         const itemExists = cart?.some((item:any) => item.name === action.payload.name);
         if (itemExists) {
            return state;
         }
         return {
            ...state,
            cart: [...cart, action.payload]
         }
      case 'REMOVE_FROM_CART':
         return {
            ...state,
            cart: state.cart.filter((item:any) => item.name!== action.payload.name)
         }
      default:
         return state
   }
}

export default Reducer;
