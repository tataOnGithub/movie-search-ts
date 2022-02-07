var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// For Button1 
var input1 = document.getElementById('input-id-1');
var button1 = document.getElementById('button-id-1');
var countryWrapper = document.getElementById('country-wrapper');
var years = document.getElementById('years');
var actors = document.getElementById('actors');
// For Button2
var button2 = document.getElementById('button-id-2');
var input2 = document.getElementById('input-id-2');
var input3 = document.getElementById('input-id-3');
var input4 = document.getElementById('input-id-4');
var sectionWrapper = document.getElementById('section2-wrapper');
var moviesLength = document.getElementById('movies-length');
var population = document.getElementById('countries-population');
button2.addEventListener('click', function (event) {
    event.preventDefault();
    moviesLength.innerHTML = '';
    population.innerHTML = '';
    var value2 = input2.value;
    var value3 = input3.value;
    var value4 = input4.value;
    input2.value = '';
    input3.value = '';
    input4.value = '';
    getMoviesData(value2, value3, value4);
});
button1.addEventListener('click', function (event) {
    event.preventDefault();
    countryWrapper.innerHTML = '';
    var value = input1.value;
    input1.value = '';
    getMovieData(value);
});
// interface DataOfMovies {
//     runtime: number;
//     countries: string[];
// }
function getMoviesData() {
    var movies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        movies[_i] = arguments[_i];
    }
    return __awaiter(this, void 0, void 0, function () {
        var moviesData, totalRuntime, set, totalPopulation;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(movies.map(function (name) { return getMovie(name); })).then(function (data) { return data.map(function (el) { return ({
                        runtime: parseInt(el.Runtime),
                        countries: el.Country.split(', ')
                    }); }); })];
                case 1:
                    moviesData = _a.sent();
                    totalRuntime = 0;
                    moviesData.forEach(function (el) {
                        totalRuntime += el.runtime;
                    });
                    set = __spreadArray([], new Set(moviesData.map(function (el) { return el.countries; }).flat()), true);
                    return [4 /*yield*/, Promise.all(set.map(function (name) { return getCountryData(name); })).then(function (data) { return data.map(function (el) { return el[0].population; }); })
                            .then(function (p) { return p.reduce(function (a, c) { return a + c; }); })];
                case 2:
                    totalPopulation = _a.sent();
                    moviesLength.innerHTML = "Duration Of All Movies: ".concat(totalRuntime, " mins");
                    population.innerHTML = "Population Of All Countries: ".concat(totalPopulation);
                    return [2 /*return*/];
            }
        });
    });
}
// interface DataOfCountry {
//     name: any;
//     flag: any;
//     currency: string;
// }[]
function getMovieData(name) {
    return __awaiter(this, void 0, void 0, function () {
        var movieData, countryData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getMovie(name).then(function (data) { return ({
                        year: data.Year,
                        actors: data.Actors,
                        country: data.Country.split(", ")
                    }); })];
                case 1:
                    movieData = _a.sent();
                    return [4 /*yield*/, Promise.all(movieData.country.map(function (countryName) { return getCountryData(countryName); })).then(function (data) { return data.map(function (el) { return ({
                            name: el[0].name.official,
                            flag: el[0].flags.png,
                            currency: Object.keys(el[0].currencies)[0]
                        }); }); })["catch"](function (err) { return console.log('can not find'); })];
                case 2:
                    countryData = _a.sent();
                    renderMovieData(movieData, countryData);
                    return [2 /*return*/];
            }
        });
    });
}
function renderMovieData(m, c) {
    getMovieYear(m);
    getMovieActors(m);
    getMovieCountries(c);
}
function getMovieYear(m) {
    var currentYear = new Date().getFullYear();
    var year = parseInt(m.year);
    years.innerHTML = "Released: ".concat(currentYear - year, " Years Ago");
}
function getMovieActors(m) {
    var actorsList = [];
    actorsList.push(m.actors);
    var newList = actorsList.join('');
    actorsList = newList.split(', ');
    newList = actorsList.join(' ');
    actorsList = newList.split(' ');
    var finalArr = [];
    for (var i = 0; i < actorsList.length; i++) {
        if (i % 2 == 0) {
            finalArr.push(actorsList[i]);
        }
    }
    var finalString = finalArr.join(', ');
    actors.innerHTML = 'Actors: ' + finalString;
}
function getMovieCountries(c) {
    var flagCountry = '';
    var currency = '';
    var parentDiv = document.createElement('div');
    parentDiv.classList.add('parent-div');
    countryWrapper.appendChild(parentDiv);
    for (var i = 0; i < c.length; i++) {
        flagCountry = c[i].flag;
        currency = c[i].currency;
        var childDiv = document.createElement('div');
        childDiv.classList.add('child-div');
        parentDiv.appendChild(childDiv);
        var movieCountry = document.createElement('p');
        movieCountry.classList.add('movie-country');
        var currencyTag = document.createElement('p');
        currencyTag.classList.add('currency');
        var flagTag = document.createElement('img');
        flagTag.classList.add('flag');
        parentDiv.appendChild(movieCountry);
        parentDiv.appendChild(currencyTag);
        parentDiv.appendChild(flagTag);
        movieCountry.innerHTML = c[i].name + ': ';
        currencyTag.innerHTML = 'Currency: ' + currency;
        flagTag.src = flagCountry;
    }
}
function getMovie(title) {
    return fetch("http://www.omdbapi.com/?t=".concat(title, "&apikey=3ea72128")).then(function (res) { return res.json(); });
}
function getCountryData(name) {
    return fetch("https://restcountries.com/v3.1/name/".concat(name)).then(function (response) { return response.json(); });
}
