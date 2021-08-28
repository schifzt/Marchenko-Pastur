import numpy as np

a = 0.1    # d/n
n = 5000
d = int(n*a)

# X: d x n matrices
# Y: n x n matrices
mean = np.zeros(n)
cov = np.identity(n)
X = np.random.multivariate_normal(mean, cov, d)
Y = X@X.T / n

eigenvals = np.linalg.eigvals(Y)

eigenvals = np.append(eigenvals.real, a.real)

np.savetxt('eigenvals.csv', eigenvals, delimiter=',', fmt='%.3f')
