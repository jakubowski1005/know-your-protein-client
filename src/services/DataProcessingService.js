import axios from 'axios'
import { API_URL } from '../resources/constants'

class DataProcessingService {

    analyzeSpectrum(data) {
        return axios.post(API_URL + '/analyze', data)
    }

    saveInDatabse(data, name) {
        console.log(`File '${name}' saved in database`)
    }
}

export default new DataProcessingService()

