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

Genetic algorithms (GA) are a class of optimization algorithms inspired by the principles of **natural selection and genetics**. These algorithms draw inspiration from the process of evolution observed in biology to solve complex problems and search for optimal solutions. In TSP, genetic algorithms are good candidates for approximating the shortest path due to their ability to **handle highly complex solution manifolds** such as this one. 

## My contributions
- Complete implementation of the genetic algorithm as well as its operators in object-oriented Python
- Development of small testing suite 
- Algorithm optimization through the use of the Numba python module
- GUI development for real-time visualization of evolutionary process

## Data 
The evaluation of the GA was performed on 4 datasets, 3 of which were primarily used for debugging. 

The first three datasets are designed such that the x and y coodinates of the cities fall along the circumference of a unit circle. These datasets were designed in this way since we know that the shortest path through the cities will be along the perimeter of the circle, and the length of the path should be very close to 2pi (~6.28). The three datasets are in increasing difficulty, with the easiest containing only 10 cities, the medium containing 50, and the hard one containing 500 cities.


<div class="row">
    <div class="col-sm">
        {% include figure.html path="assets/img/tsp_circle_view.png" title="tsp" class="img-fluid rounded z-depth-1" caption="3 circle datasets used for building and debugging the GA."%}
        </div>
</div>

The challenge dataset contains 1000 points scattered in a much less structured pattern.

<div class="row">
    <div class="col-sm">
        {% include figure.html path="assets/img/tsp_challenge_view.png" title="tsp" class="img-fluid rounded z-depth-1" caption="3 circle datasets used for building and debugging the GA."%}
        </div>
</div>

## Results


<div class="row">
    <div class="col-sm">
        {% include figure.html path="assets/img/tsp10circle_gif.gif" title="tsp" class="img-fluid rounded z-depth-1" caption="Visualization of GA training over simple problem"%}
        </div>
        <div class="col-sm">
        {% include figure.html path="assets/img/tsp50circle_gif.gif" title="ga" class="img-fluid rounded z-depth-1" caption="Visualization of GA training over medium problem"%}
    </div>
</div>

## Repo structure

{% raw %}
```
.gitignore
LICENSE
README.md
data
   |-- easy.txt
   |-- medium.txt
   |-- hard.txt
   |-- challenge.txt
environment.yml
gene_tsp
   |-- __init__.py
   |-- evo_base.py
   |-- evo_tsp.py
   |-- genetic_algorithm.py
   |-- gui.py
   |-- utilities.py
train.py
train_gui.py
```
{% endraw %}
## Install

Create a conda (or mamba) environment with Python 3.10:

```conda create -n genetsp python=3.10```

Activate environment:

```conda activate genetsp```

Install dependencies:

```conda install numpy numba tqdm wandb matplotlib pyqt scipy```

## Run 

To run the GA wih GUI, cd to the root of this repo and run:

```python train_gui.py```

To run the GA wihout the GUI, cd to the root of this repo and run:

```python train.py```


