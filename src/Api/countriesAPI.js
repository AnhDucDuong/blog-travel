import {
    axiosClient
} from "./axiosClient";

const CountryAPI = {
    countryById() {
        const url = `countryId`;
        return axiosClient.param(url)
    },

    create(country) {
        const url = `/countries`;
        return axiosClient.post(url, country)
    },

    list() {
        const url = `/countries`;
        return axiosClient.get(url)
    },

    read(countryId) {
        const url = `/countries/${countryId}`;
        return axiosClient.get(url)
    },

    remove(countryId) {
        const url = `/countries/${countryId}`;
        return axiosClient.delete(url)
    },

    update(countryId, data) {
        const url = `/countries/${countryId}`;
        return axiosClient.put(url, data)
    }
}

export default CountryAPI;