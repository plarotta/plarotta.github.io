---
layout: page
title: NumpyNet
description: Numpy-only deep learning implementation
img: assets/img/np.jpeg
importance: 2
category: software
github: https://github.com/plarotta/NumpyNet
---

This project captures a learning exploration into the fundamentals of deep learning. In this project I build and train neural networks from scratch using Numpy, and I validate my approach by comparing it to PyTorch-trained models. Repo can be found [here](https://github.com/plarotta/NumpyNet).

    ---
    Skils involved:
    - Deep learning
    - Numpy
    - Backpropagation
    - PyTorch
    ---


## Problem description
Neural networks are function approximators comprised of compositions of linear operators and non-linear activation functions. At their core, neural networks combine many ```y=wx+b``` operations to minimize the prediction error of the entire neural network on the training data. 

In this project I set out to become familiar with the under-the-hood of multi-layer perceptrons (MLP) by implmented methods for creating, training, and testing neural networks with Numpy alone. 

## My contributions
- Class definitions used for creating models in object-oriented Python
- Full implementations of feedforward and backpropagation operations
- Evaluation on toy dataset and comparison with PyTorch


## Data
A small dataset was generated to debug my implementation. The dataset is relative easy classification task consisting of 5000 2-feature observations belonging to 3 separate classes. The data is displayed below:

<div class="row">
    <div class="col-sm">
        {% include figure.html path="assets/img/numpy_test_data.png" title="tsp" class="img-fluid rounded z-depth-1"%}
        </div>
</div>

## Results

<div class="row">
    <div class="col-sm">
        {% include figure.html path="assets/img/numpynet_res.png" title="tsp" class="img-fluid rounded z-depth-1" %}
        </div>
</div>



