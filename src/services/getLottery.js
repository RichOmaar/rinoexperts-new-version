import $ from 'jquery';
import config from '../config';
const URL_API = config.urlApi+'controllers/getLottery.controller.php';

export default function getParticipants(){
    return $.ajax({
        url: URL_API,
        type: 'GET',
    })
}