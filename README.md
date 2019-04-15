# Number in full

## Prerequisites 

Docker

## Building

In the root folder of the project run the above command

```
docker build -t number-in-full/node .
```

## Running 

```
docker run -d -p 3000:3000 number-in-full/node
```

In a browser you can access the above url

```
localhost:3000
```

## Running tests

```
docker run -p 3000:3000 number-in-full/node make tests
```

