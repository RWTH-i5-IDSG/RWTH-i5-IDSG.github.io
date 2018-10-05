---
title: SteVe
permalink: /about/steve/
author_profile: false
period: 2014 - 2016
categories: Software
research: [eConnect]
holder: RWTH
sidebar:
  - title: ""
    image: /assets/images/feature-steve.png
    image_alt: "steve"
    text: ""
---


![SteVe](https://github.com/RWTH-i5-IDSG/steve/raw/master/src/main/resources/webapp/static/images/logo.png) 

[![Build Status](https://travis-ci.org/RWTH-i5-IDSG/steve.svg)](https://travis-ci.org/RWTH-i5-IDSG/steve)
[![Coverity Status](https://scan.coverity.com/projects/6601/badge.svg)](https://scan.coverity.com/projects/rwth-i5-idsg-steve)


# Introduction

SteVe was developed at the RWTH Aachen University and means Steckdosenverwaltung, namely socket administration in German. The aim of SteVe is to support the deployment and popularity of electric mobility, so it is easy to install and to use. SteVe provides basic functions for the administration of charge points, user data, and RFID cards for user authentication and was tested successfully in operation.

SteVe is considered as an open platform to implement, test and evaluate novel ideas for electric mobility, like authentication protocols, reservation mechanisms for charge points, and business models for electric mobility. SteVe is distributed under GPL and is free to use. 

### Charge Point Support

Electric charge points using the following OCPP versions are supported:

* OCPP1.2S
* OCPP1.2J
* OCPP1.5S
* OCPP1.5J
* OCPP1.6S <sup>[1]</sup>
* OCPP1.6J <sup>[1]</sup>

[1]: All profiles with the exception of "Smart Charging" are implemented: Core, Firmware Management, Local Auth List Management, Reservation and Remote Trigger profiles

For Charging Station compatibility please check:
https://github.com/RWTH-i5-IDSG/steve/wiki/Charging-Station-Compatibility 
The list was just recently started and is therefore not exhaustive.

Are you having issues?
-----
See the [FAQ](https://github.com/RWTH-i5-IDSG/steve/wiki/FAQ)
