---
layout: page
title: NumpyNet
description: Numpy-only deep learning implementation
img: assets/img/np.jpeg
importance: 2
category: software
github: https://github.com/plarotta/NumpyNet
---

I have used PyTorch to build models for several class projects at this point, and for a while I have felt quite comfortable with designing, training, and testing a model from scratch. However, deep learning right now is at a point where some of these frameworks (PyTorch, TensorFlow, etc.) abstract away so much of the technical details that we lose the fundamental understanding of what a neural network is actually doing. Even though I say I have several years of experience in deep learning, it was not until this project that I became confident in my deep learning fundamentals.

In this project I implement a deep learning class for building DNNs (no convolution yet) with only Numpy. I coded feedforward and backpropagation methods from scratch, and I made a general interface for designing and training fully-connected networks of any size. [Here](https://github.com/plarotta/NumpyNet) is the repo for this project where you can find the full codebase as well as an example model. To come is a testing suite that I want to implement just to build my knowledge of unit testing, and eventually I will add a CNN class to NumpyNet.


