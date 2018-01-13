import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {HttpClient} from "@angular/common/http";
import {countries, country} from "../../data/countries";
import {Router} from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    homeForm: FormGroup;
    email: string;
    country: string;
    countries: Array<country>;
    filteredCountries: Array<country>;
    loading: boolean;
    // countriesApi: string = 'https://api.vk.com/api.php?oauth=1&method=database.getCountries&v=5.69&need_all=1&count=1000';

    constructor(private http: HttpClient, private router: Router) {
        this.createForm();
        this.loading = false;
    }

    ngOnInit() {
        this.getCountries();
    }

    getCountries() {
        // this.http.get(this.countriesApi).subscribe((data: VKResponse) => {
        //     this.countries = data.response.items;
        // });
        this.countries = countries;
    }

    createForm() {
        this.homeForm = new FormGroup({
            email: new FormControl(this.email, [
                Validators.email, Validators.required
            ]),
            country: new FormControl(this.country, [
                Validators.required
            ])
        })
    }

    getEmail() {
        return this.homeForm.get('email').value;
    }

    emailLog() {
        TimerObservable.create(1000).subscribe(() => {
            console.log(this.getEmail());
        });
    }

    filterCountries($event) {
        this.filteredCountries = this.countries.filter(item => {
            return ~item.title.toLowerCase().search($event.query.toLowerCase())
        });
    }

    selectCountry($event: country) {
        this.country = $event.title;
    }

    signIn() {
        this.loading = true;
        TimerObservable.create(3000).subscribe(() => {
            this.router.navigate(['/home']);
        });
    }
}
