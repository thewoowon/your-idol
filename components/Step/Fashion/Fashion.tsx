import { FASHION_STYLE } from "@/contants/flow";
import { CommonStepType } from "@/types";
import styled from "@emotion/styled";
import React from "react";

const Fashion = ({ setFlowContext, flowContext }: CommonStepType) => {
  return (
    <Container>
      <div>
        <Button
          onClick={() => {
            setFlowContext((prev) => {
              return { ...prev, step: "faceShape" };
            });
          }}
        >
          이전
        </Button>
      </div>
      <Grid>
        {flowContext.context.sex === "남자"
          ? FASHION_STYLE["MALE"].map((item, index) => {
              return (
                <Selection
                  key={index}
                  onClick={() => {
                    setFlowContext((prev) => {
                      return {
                        ...prev,
                        context: { ...prev.context, fashion: item },
                      };
                    });
                  }}
                  selected={
                    flowContext.context && flowContext.context.fashion === item
                  }
                >
                  <div>{item}</div>
                </Selection>
              );
            })
          : FASHION_STYLE["FEMALE"].map((item, index) => {
              return (
                <Selection
                  key={index}
                  onClick={() => {
                    setFlowContext((prev) => {
                      return {
                        ...prev,
                        context: { ...prev.context, fashion: item },
                      };
                    });
                  }}
                  selected={
                    flowContext.context && flowContext.context.fashion === item
                  }
                >
                  <div>{item}</div>
                </Selection>
              );
            })}
      </Grid>
      <div>
        <Button
          onClick={() => {
            setFlowContext((prev) => {
              return { ...prev, step: "interest" };
            });
          }}
        >
          다음
        </Button>
      </div>
    </Container>
  );
};

Fashion.displayName = "Fashion";

export default Fashion;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Button = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
`;

const Selection = styled.div<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? "#ff6b6b" : "white")};
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #e0e0e0;
  }
`;
