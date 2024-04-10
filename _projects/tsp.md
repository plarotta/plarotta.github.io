---
layout: page
title: GeneTSP
description: Evolving solutions to the traveling salesman problem
img: assets/img/tsp.png
github: https://github.com/plarotta/genetic-traveling-salesperson
importance: 1
category: software
---

This project captures some of the main takeaways from the first unit of Columbia's class on Evolutionary Computation. I show how genetic algorithms can be used as approximation methods by developing an implementation to solve the traveling salesperson problem. You can find the repo [here](https://github.com/plarotta/genetic-traveling-salesperson).

    ---
    Skills involved:
    -Python
    -Genetic algorithm design
    -Just-in-time (JIT) compilation for Python code optimization
    -Numpy
    -PyQt
    -Multi-threading
    ---

## Problem description

<div class="row">
    <div class="col-sm">
        {% include figure.html path="assets/img/48StatesTSP.png" title="tsp" class="img-fluid rounded z-depth-1" %}
        </div>
        <div class="col-sm">
        {% include figure.html path="assets/img/ga_im.png" title="ga" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

The **Traveling Salesperson Problem (TSP)** is a classic optimization puzzle where the goal is to find the **most efficient route** that visits a set of cities exactly once and returns to the starting point. TSP is notoriously challenging because the **number of possible routes grows exponentially** with the number of cities. Solving the TSP efficiently is essential in various fields, such as logistics, transportation planning, and circuit design, making it a **fundamental problem** in computer science and optimization. 

Genetic algorithms are a class of optimization algorithms inspired by the principles of natural selection and genetics. These algorithms draw inspiration from the process of evolution observed in biology to solve complex problems and search for optimal solutions. In TSP, genetic algorithms are good candidates for approximating the shortest path due to their ability to handle highly complex solution manifolds such as this one. 

## My contributions
- Complete implementation of the genetic algorithm as well as its operators in object-oriented Python
- Development of small testing suite 
- Algorithm optimization through the use of the Numba python module
- GUI development for real-time visualization of evolutionary process

## Results

<div class="row">
    <div class="col-sm">
        {% include figure.html path="assets/img/tsp10circle_gif.gif" title="tsp" class="img-fluid rounded z-depth-1" caption="Visualization of GA over simple problem"%}
        </div>
        <div class="col-sm">
        {% include figure.html path="assets/img/tsp50circle_gif.gif" title="ga" class="img-fluid rounded z-depth-1" caption="Visualization of GA over medium problem"%}
    </div>
</div>

