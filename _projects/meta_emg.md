---
layout: page
title: MetaEMG
description: meta-learning for EMG classification
img: assets/img/orthosis.png
importance: 2
category: software
github: https://github.com/plarotta/meta-emg
---


This project describes my approach to training EMG-based intent classifiers for control of robotic orthoses using meta learning. Repo can be found [here](https://github.com/plarotta/meta-emg), and pre-print of the paper submission can be found [here](https://arxiv.org/abs/2403.13147).

    ---
    Skills involved:
    - Deep learning
    - Signal processing
    - Experimental design
    - Research 
    - Analytics tools (Hydra & Wandb)
    ---


## Problem description
_MyHand_ is a robotic exoskeleton device developed in our [lab](https://roam.me.columbia.edu/) which assists the user in opening and closing a grasp via mechanical assistance. The device is comprised of a tendon mechanism which pulls on the finger-tips of the user's hand, and it is controlled via biosignals read by a surface electromyography (EMG) sensor resting on the forearm.

<div class="row">
    <div class="col-sm">
        {% include figure.html path="assets/img/myhand.png" title="tsp" class="img-fluid rounded z-depth-1"%}
        </div>
</div>

In order to use EMG as the control input, a mapping between EMG signal and the intent of the user needs to be established. Previous work in the lab has detailed several methods including Linear Discriminant Analysis (LDA), semi-supervised learning, random forests (RF), and deep neural networks, but data scarcity and concept drift remain unsolved challenges for this method of device interface. 

We formulate the objective of finding an EMG-intent mapping as a [few-shot learning](https://blog.paperspace.com/few-shot-learning/) problem since in practice, the device needs to be calibrated at the beginning of each use. Doing this, we can apply [meta learning](https://en.wikipedia.org/wiki/Meta-learning_(computer_science)) to build deep learning training frameworks that give us fast-adapting models of high capacity.

## My contributions
- Conceived the idea of applying the model-agnostic meta learning algorithm (MAML) to this problem
- Led the development of the codebase for this project which included building models, datasets, experimental workflows, and training loops
- Co-developed the experiments used to evaluate our approach
- Led the analysis of the data experiments
- Generated the paper figures
