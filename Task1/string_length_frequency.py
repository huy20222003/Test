from collections import Counter

def most_frequent_string_lengths(strings):
    if not strings:
        return []

    lengths = [len(s) for s in strings]

    length_counts = Counter(lengths)

    max_frequency = max(length_counts.values())

    most_frequent_lengths = {length for length, count in length_counts.items() if count == max_frequency}

    result = [s for s in strings if len(s) in most_frequent_lengths]

    return result

# Unit tests
def test_most_frequent_string_lengths():
    """Unit tests for most_frequent_string_lengths function."""
    # Test case 1
    input_data = ['a', 'ab', 'abc', 'cd', 'def', 'gh']
    expected_output = ['ab', 'cd', 'gh']
    actual_output = most_frequent_string_lengths(input_data)
    print(f"Test case 1:\nInput: {input_data}\nExpected Output: {expected_output}\nActual Output: {actual_output}\n")
    assert actual_output == expected_output

    # Test case 2: Single string
    input_data = ['hello']
    expected_output = ['hello']
    actual_output = most_frequent_string_lengths(input_data)
    print(f"Test case 2:\nInput: {input_data}\nExpected Output: {expected_output}\nActual Output: {actual_output}\n")
    assert actual_output == expected_output

    # Test case 3: Multiple strings with the same length
    input_data = ['a', 'b', 'c']
    expected_output = ['a', 'b', 'c']
    actual_output = most_frequent_string_lengths(input_data)
    print(f"Test case 3:\nInput: {input_data}\nExpected Output: {expected_output}\nActual Output: {actual_output}\n")
    assert actual_output == expected_output

    # Test case 4: Empty input
    input_data = []
    expected_output = []
    actual_output = most_frequent_string_lengths(input_data)
    print(f"Test case 4:\nInput: {input_data}\nExpected Output: {expected_output}\nActual Output: {actual_output}\n")
    assert actual_output == expected_output

    # Test case 5: Strings with different lengths but equal frequency
    input_data = ['a', 'bb', 'ccc', 'dd', 'e']
    expected_output = ['a', 'bb', 'dd', 'e']  # Lengths 1 and 2 are most frequent
    actual_output = most_frequent_string_lengths(input_data)
    print(f"Test case 5:\nInput: {input_data}\nExpected Output: {expected_output}\nActual Output: {actual_output}\n")
    assert actual_output == expected_output

    print("All tests passed!")

# Run tests
test_most_frequent_string_lengths()
