import pandas
def dfprint(df):
    with pandas.option_context('display.max_rows', None, 'display.max_columns', None):
    	print(df)
def dfhead(df, n = 10):
    with pandas.option_context('display.max_rows', None, 'display.max_columns', None):
        print(df.head(n))
