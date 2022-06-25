import $ from 'jquery';
import config from '../config';
const URL_API = config.urlApi+'controllers/getNosePreferences.controller.php';

export default function getNoses(){
    return $.ajax({
        url: URL_API,
        type: 'GET',
    })
}