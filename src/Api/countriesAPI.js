import {
    axiosClient
} from "./axiosClient";

const CountryAPI = {
    countryById() {
        const url = `countryId`;
        return axiosClient.param(url)
    },

    create(country) {
        const url = `/country`;
        return axiosClient.post(url, country)
    },

    list() {
        const url = `/country`;
        return axiosClient.get(url)
    },

    read(countryId) {
        const url = `/country/${countryId}`;
        return axiosClient.get(url)
    },

    remove(countryId) {
        const url = `/country/${countryId}`;
        return axiosClient.delete(url)
    },

    update(countryId, data) {
        const url = `/country/${countryId}`;
        return axiosClient.put(url, data)
    }
}

export default CountryAPI;