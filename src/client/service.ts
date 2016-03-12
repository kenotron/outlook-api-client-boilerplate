import * as auth from './store/auth';

const BASE_URL = "https://outlook.office.com/api/v2.0/me";

interface ApiOptions {
	[index: string]: any
}

export function postRequest(url: string, data: any, opts?: ApiOptions): Promise<any> {
	return makeRequest(url, data, "post", opts);
}

export function putRequest(url: string, data: any, opts?: ApiOptions): Promise<any> {
	return makeRequest(url, data, "put", opts);
}

export function deleteRequest(url: string, opts?: ApiOptions): Promise<any> {
	return makeRequest(url, null, "delete", opts);
}

export function getRequest(url: string, opts?: ApiOptions): Promise<any> {
	return makeRequest(url, null, "get", opts);
}

export function makeRequest(url: string, data: any, method: string, opts?: ApiOptions): Promise<any> {
	method = method || "get";
	
	let headers: { [index: string]: string } = {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	};
	
	var authToken = auth.getAuthToken();
	
	if (authToken && (!opts || !opts['auth'])) {
		headers['Authorization'] = 'Bearer ' + authToken.accessToken;
	}
	
	return fetch(`${BASE_URL}${url}`, {
		headers: headers,
		body: method == "post" || method == "put" ? JSON.stringify(data) : undefined,
		method: method || "get"
	}).then((res) => {
		return res.json();
	}).catch((err) => {
		return Promise.reject(err);
	});	
}