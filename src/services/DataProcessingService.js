import axios from 'axios'
import { API_URL } from '../resources/constants'

class DataProcessingService {

    analyzeSpectrum(data) {
        return axios.post(API_URL + '/analyze', data)
    }
}

export default new DataProcessingService()

