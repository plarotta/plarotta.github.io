---
layout: page
title: GeneTSP
description: Evolving solutions to the traveling salesman problem
img: assets/img/tsp.png
github: https://github.com/plarotta/genetic-traveling-salesperson
importance: 1
category: software
---

This project captures some of the main takeaways from the first unit of Columbia's class on Evolutionary Computation. I also show how genetic algorithms can be used as gradient-free optimization methods by developing a simple implementation to solve the Traveling Salesperson problem. You can find the repo [here](https://github.com/plarotta/genetic-traveling-salesperson).

    ---
    Skills learned:
    -Genetic algorithm design
    -Just-in-time (JIT) compilation for Python code optimization
    -Numpy
    ---

# Problem description

<div class="row">
    <div class="col-sm">
        {% include figure.html path="assets/img/48StatesTSP.png" title="tsp" class="img-fluid rounded z-depth-1" %}
        </div>
        <div class="col-sm">
        {% include figure.html path="assets/img/ga_im.png" title="ga" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

The Traveling Salesperson Problem (TSP) is a classic optimization puzzle where the goal is to find the most efficient route that visits a set of cities exactly once and returns to the starting point. Imagine a salesperson aiming to minimize the total distance traveled while covering all destinations. TSP is notoriously challenging because the number of possible routes grows exponentially with the number of cities. Solving the TSP efficiently is essential in various fields, such as logistics, transportation planning, and circuit design, making it a fundamental problem in computer science and optimization. 

The goal is thus to find an ordering in which to traverse a list of cities to minimize the total distance traveled. 


