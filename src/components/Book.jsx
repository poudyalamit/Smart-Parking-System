import { useEffect } from 'react'
import { DynamoDBClient, QueryCommand } from "@aws-sdk/client-dynamodb";
const Book = () => {
    useEffect(() => {
        const client = new DynamoDBClient({
            region: "", 
            credentials: {
              accessKeyId: "", 
              secretAccessKey: "", 
            },
          });
          
          // Example function to query DynamoDB
          const queryDynamoDB = async () => {
            try {
              const command = new QueryCommand({
                TableName: "", 
                KeyConditionExpression: "spotId  = :spotId",
                ExpressionAttributeValues: {
                  ":spotId ": { S: "1 " }, 
                },
              });
          
              const response = await client.send(command);
              console.log("DynamoDB Query Result:", response.Items);
            } catch (error) {
              console.error("Error querying DynamoDB:", error);
            }
          };
          
          queryDynamoDB();
    }, [])
  return (
    <div>
      
    </div>
  )
}

export default Book
