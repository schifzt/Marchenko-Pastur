#!/usr/bin/env python3

import numpy as np

a = 0.2    # d/n
n = 1000
d = int(n*a)

params = np.array([a, n, d])
np.savetxt('params.csv', params, delimiter=',', fmt='%.3f')

# Generate a random matrix
# X: d x n matrices
# Y: n x n matrices

mean = np.zeros(n)
cov = np.identity(n)
X = np.random.multivariate_normal(mean, cov, d)
Y = X@X.T / n

eigenvals = np.linalg.eigvals(Y)

# eigenvals must be 2 x n array
eigenvals = np.array([eigenvals.real, eigenvals.imag])

np.savetxt('eigenvals.csv', eigenvals, delimiter=',', fmt='%.3f')


# Generate p.d.f. points

def density(x, a):
    lb = (1-np.sqrt(a))**2
    ub = (1+np.sqrt(a))**2

    if 1 <= a and x == 0:
        return 1 - 1/a

    if lb <= x and x <= ub:
        return 1 / (2 * np.pi * x * a) * np.sqrt((ub - x) * (x - lb))
    else:
        return 0


domain = [0, np.max(eigenvals).real + 1]
step = 0.01
n = int(domain[1] - domain[0]) / step

x = np.arange(domain[0], domain[1], step)
y = np.frompyfunc(density, 2, 1)(x, a)
points = np.array([x, y])

np.savetxt('density.csv', points, delimiter=',', fmt='%.3f')
