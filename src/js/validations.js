import { ValidationError, C, ConnectionError } from "./error"

const name = 'nelson'
const age = 50
const email = ''


try {
    
} catch (e) {
    if(e instanceof ConnectionError){
        // retry after a few seconds
        setTimeout(()=>{
            validateUser({name, age, email})
        })    
    }
if(e instanceof ValidationError){
    // showUIModalValidation()
}

}