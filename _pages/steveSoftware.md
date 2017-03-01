---
title: "Steckdosen Verwaltung"
period: 2014 - 2016
categories: Software
tags:
  - Software
  - eConnect
holder: RWTH
---

![RWTH](../assets/images/RWTH.png){:class="img-responsive, pull-right" :alt="RWTH"}

# SteVe
SteVe (abbr. for **Ste**ckdosen **Ve**rwaltung, engl.: socket administration) manages customer and charging station data.
Steve supports RFID-Cards for authentification processes between customers and charging stations.
The communication protocol has been implemented using OCPP (Open Charge Point Protocol).
It is a Web application designed to run under Apache Tomcat and consists of multiple Java servlets. 
It uses the Apache [CXF framework](http://cxf.apache.org/) for creating and receiving SOAP messages.
Moreover, CXF supports Web Services Addressing.
SteVe was tested successfully in operation.

![SteVe](../assets/images/steve.png){:class="img-responsive", center-block" :alt="SteVe"}
