// Copyright 2023-2025 Logan Magee
//
// SPDX-License-Identifier: AGPL-3.0-only

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginScreenComponent } from './login-screen.component';

describe('LoginScreenComponent', () => {
    let component: LoginScreenComponent;
    let fixture: ComponentFixture<LoginScreenComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LoginScreenComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(LoginScreenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
