import React from "react";
import { Box, Text, Skeleton, Icon } from "@chakra-ui/core";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import { Restaurant } from "../../generated/graphql-types";

const RestaurantPage = () => {
  const { slug } = useParams();
  const { loading, error, data } = useQuery<{ restaurant: Restaurant }>(gql`
    query {
      restaurant(slug: "${slug}") {
        id
        name
        image
        address
      }
    }
    `);

  console.warn(loading, error, data);

  if (loading) {
    return (
      <Box>
        <Skeleton height="100vw" marginBottom="20px" />
        <Skeleton height="40px" my="10px" mx="10px" />
        <Skeleton height="40px" my="10px" mx="10px" />
        <Skeleton height="40px" my="10px" mx="10px" />
        <Skeleton height="40px" my="10px" mx="10px" />
        <Skeleton height="40px" my="10px" mx="10px" />
        <Skeleton height="40px" my="10px" mx="10px" />
      </Box>
    );
  }

  const { restaurant } = data!;
  return (
    <Box position="relative">
      <Box
        backgroundImage={`url("${restaurant.image}")`}
        backgroundSize="cover"
        backgroundPosition="center"
        height="100vw"
      >
        <Text
          as="h1"
          position="absolute"
          bottom={0}
          left={0}
          color="white"
          padding="1rem"
          fontSize="2.5rem"
          boxShadow="1px solid black"
          textShadow="1px 1px 6px rgba(0, 0, 0, 0.6)"
        >
          {restaurant.name}
        </Text>
        <Text
          position="absolute"
          right={0}
          top={0}
          color="gray.300"
          fontSize="1rem"
          display="flex"
          padding=".5rem"
        >
          <span>{restaurant.address}</span>
          <Icon marginTop=".15rem" name="pin" mx=".25rem" fill="gray.300" />
        </Text>
      </Box>
    </Box>
  );
};

export default RestaurantPage;
