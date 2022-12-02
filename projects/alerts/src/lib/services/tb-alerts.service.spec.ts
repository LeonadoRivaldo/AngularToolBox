import { TestBed } from '@angular/core/testing';

import { TbAlertsService } from './tb-alerts.service';

describe('AlertsService', () => {
	let service: TbAlertsService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(TbAlertsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
