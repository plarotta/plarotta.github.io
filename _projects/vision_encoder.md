---
layout: page
title: Vision Encoder
description: building a vision-only model to predict robot arm joint configuration
img: assets/img/ur5.jpg
importance: 4
category: software
---

My final project for Deep Learning for Computer Vision sought to build a model to predict robot configuration from vision alone, and we trained and tested the model on simulated data. 

    ---
    Skills learned:
    -PyBullet
    -Image processing
    -PyTorch
    -Data wrangling
    ---

In order to collect a simulated dataset, we set up an environment encorporating a UR5 arm and a few camera sensors, and we collected a series of datasets of varying difficulty. The query task for the model was to predict 4 of the 6 joint angles of the robot arm.

Next we build the model architecture and defined the preprocessing workflow for the images that would be fed into the model.

Finally we trained the model on the simulated data, and our best model achieved low prediction error on the test dataset.

Lastly, we ran another short experiment in simulation to see how well our model would predict the arm state as the arm executes a trajectory in real time, and we found the prediction accuracy to be higher that expected. You can find our report [here](https://github.com/plarotta/plarotta.github.io/blob/master/assets/pdf/DLCV_Final_Project_Report-2%20(1).pdf).
