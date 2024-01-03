package main

import (
	"context"
	"fmt"
)

type ValueData struct {
	Value HexDecBin           `json:"Value"`
	ComplementValue HexDecBin `json:"ComplementValue"`
}

type HexDecBin struct {
	Hex string `json:"Hex"`
	Dec string `json:"Dec"`
	Bin string `json:"Bin"`
}

var stack ComplementStack

type Complement struct {
	ctx context.Context
}

func NewComplement() *Complement {
	stack = ComplementStack{}
	return &Complement{}
}

func (c *Complement) startup(ctx context.Context) {
	c.ctx = ctx
}

func (c *Complement) Push(v int) {
	if (stack.IsFull()) {
		fmt.Println("error: stack is full.")
		return
	}
	stack.Push(v)
}

func (c *Complement) Pop() {
	if (stack.IsEmpty()) {
		fmt.Println("error: stack is empty.")
		return
	}
	stack.Pop()
}

func (c *Complement) GetValueData() ValueData {
	if (stack.IsEmpty()) {
		return ValueData{Value: HexDecBin{"", "", ""}, ComplementValue: HexDecBin{"", "", ""}}
	}

	hex, dec, bin := stack.ToHexDecBinString()
	cHex, cDec, cBin := stack.ToHexDecBinComplementString()
	normal := HexDecBin{hex, dec, bin}
	complement := HexDecBin{cHex, cDec, cBin}
	return ValueData{Value: normal, ComplementValue: complement}
}

func (c *Complement) Delete() {
	stack.Delete()
}

func (c *Complement) GetDescribeData() []DescribeData {
	return stack.ToDescribeData()
}