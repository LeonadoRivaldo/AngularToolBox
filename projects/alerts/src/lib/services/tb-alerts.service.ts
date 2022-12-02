import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TbAlertsService {

	constructor() { }

	helloWorld() {
		alert("hello world");
	}
}
