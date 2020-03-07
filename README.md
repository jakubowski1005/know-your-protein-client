# Know your protein

***Know your protein*** is web application that allows secondary structure analysis of proteins based on their infrared spectras.

*This repository contains client-side part of application. Server-side part of the app is available [here](https://github.com/jakubowski1005/know-your-protein-api).*


## Table of content

- [Description](#description)
- [Technologies, tools and libraries](#technologies-tools-and-libraries)
- [Author](#author)
- [Todo](#todo)

## Description

This project is my engineers diploma project. The application allows user to get proportions of specific secondary protein structures like alpha-helix or beta-sheet. Data are calculated by analysing results of Fourier Transform Infrared Spectroscopy. Received data can be saved in the database or can be downloaded as PDF document.

Data analysis stages:
- cutting out the component band,
- smoothing and filtration,
- numerical differentiation,
- peak detection,
- structures fitting,
- deconvolution,
- numerical integration

Client-side application is responsible for parsing CSV files, data visualization and downloading/saving results.

## Technologies, tools and libraries ##

- NPM
- React 16.8.6
- Semantic UI
- Axios
- VictoryCharts

## Author

- Artur Jakubowski

## Todo

- [ ] Add docs
- [ ] Make page responsive
- [ ] Cleanup and refactor code
