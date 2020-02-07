import {createContext} from 'react'


const ExceriseContext = createContext({
     exerciseTitle: '',
     exerciseCategory: '',
     exerciseDespcription: '',
     exerciseEquipment: '',
     handleAddFav: () => {},
     removeFromFav: () => {}


})
export default ExeriseContext