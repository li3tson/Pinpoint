<img src="https://img.shields.io/badge/Version-1.0.0-brightgreen" alt="version" />&nbsp;
<img src="https://img.shields.io/github/last-commit/li3tson/Pinpoint" alt="last-communit" />&nbsp;
<img src="https://img.shields.io/github/issues/li3tson/Pinpoint" alt="issues" />&nbsp;
<img src="https://img.shields.io/website?url=https%3A%2F%2Fpinpointip.vercel.app%2F" at="Website" />

## :rocket: About

`Pinpoint` is an IP address geolocator. Its main functionality is to allow the user to search and obtain information (Internet Provider, Geographic Data) from a given IP address in addition to allowing the user to consult this data from their own IP address. Currently there is support for light and dark mode and support for several languages such as: English, Portuguese, Spanish and French.To see a preview of the project click [here](https://raw.githubusercontent.com/li3tson/Pinpoint/main/public/Preview.png).

`Pinpoint` was initially designed for a more technical target audience, people who are aware of what an IP address is and what it is for.

## :ballot_box_with_check: Requirements

### Functional requirements

| Requirement | Description |
| --- | --- |
| `FR001` | The system must allow the user to view the geographical location of the IP address on the map in real time. |
| `FR002` | The system must allow the user to search by an IP address. |
| `FR003` | The system must allow the user to change the page theme. |
| `FR004` | The system must allow the user to change the page language. |

### Non-functional requirements

| Requirement | Description |
| --- | --- |
| `NF001` | The system must validate the searched IP address. |
| `NF002` | The system should issue an error if the ip is invalid. |
| `NF003` | The system must set the light theme as the default theme as soon as the user accesses the page. |
| `NF004` | The system must set the browser's current language as the application's default language as soon as the user accesses the page. |
| `NF005` | The system must show a loading when loading some information. |
| `NF006` | The system should issue an error if it hears an error loading some information. |


## :package: Technologies

- `Vite`
- `React.js`
- `TypeScript`
- `@tanstack/react-query`
- `i18next`
- `Axios`
- `Zod`
- `Leaflet`
- `Zustand`
- `React-hook-form`
- `Styled-Components`
- `Eslint`
- `Prettier`
- `Husky`

## :flight_departure: Running the Project

To run the project in your local environment, follow these steps:

**Note:** The node package used in this project is PNPM, to avoid possible errors I advise you to avoid using yarn or npm. Before running the project make sure to add your IPDATA API key to the .env file (.env.example).

1. Clone the repository to your local machine.
2. Run `pnpm i` in the project directory to install the required dependencies.
3. Run `pnpm run dev` to get the project started.
4. Open [http://localhost:5173](http://localhost:5173) (or the address shown in your console) in your web browser to view the app.

## Contribution

If you are interested in contributing to the growth of the project, consider reading this guide: [Contributing Guide](CONTRIBUTING.md).

## License

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)

This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).

